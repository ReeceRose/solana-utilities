import { ChangeEvent, useEffect, useState } from 'react';
import { getCryptoPrice, getWeb3Connection } from '../../utils';
import { LAMPORTS_PER_SOL, EPOCHS_PER_YEAR } from '../../constants';
import Loading from '../LoadingSpinner';

const RentCalculator: React.FC = () => {
  const CURRENCY = 'USD';

  const [isLoading, setLoading] = useState(false);
  const [kilobytes, setKilobytes] = useState('0');
  const [solanaPrice, setSolanaPrice] = useState(0);
  const [perEpochLamports, setPerEpochLamports] = useState(0);
  const [perEpochCost, setPerEpochCost] = useState(0);
  const [rentExemptLamports, setRentExemptLamports] = useState(0);
  const [rentExemptCost, setRentExemptCost] = useState(0);

  const getMinimumBalanceForRentExemption = async () => {
    if (kilobytes === '') return;
    setLoading(true);
    const connection = await getWeb3Connection();
    if (connection === null) return;
    const rentExemptValue = await connection.getMinimumBalanceForRentExemption(
      parseInt(kilobytes)
    );
    const perEpochValue = rentExemptValue / EPOCHS_PER_YEAR;
    setRentExemptLamports(rentExemptValue);
    setPerEpochLamports(perEpochValue);
    setRentExemptCost(rentExemptValue / LAMPORTS_PER_SOL);
    setPerEpochCost(perEpochValue / LAMPORTS_PER_SOL);
    setLoading(false);
  };

  const getSolanaPrice = async () => {
    if (!solanaPrice) {
      const price = await getCryptoPrice({
        token: 'solana',
        currency: CURRENCY,
      });
      if (price !== -1) {
        setSolanaPrice(price);
      }
    }
  };

  const handleKilobytesInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKilobytes(String(parseInt(e.target.value) || ''));
  };

  useEffect(() => {
    const onStart = async () => {
      await getSolanaPrice();
    };
    onStart();
  });

  return (
    <>
      {isLoading && <Loading />}
      <div className="relative flex flex-col w-full min-w-0 break-words bg-gray-700 border-0 rounded-lg shadow-lg">
        <div className="px-6 py-6 mb-0 bg-gray-900 rounded-t">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-solana-green">
              Rent Calculator
            </h6>
            <button
              className="px-4 py-2 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-gray-500 rounded shadow outline-none text-solana-green active:bg-gray-600 hover:shadow-md focus:outline-none"
              type="button"
              onClick={getMinimumBalanceForRentExemption}
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10">
          <hr className="my-6 border-gray-50 border-b-1" />

          <h6 className="text-sm font-bold uppercase text-gray-50">
            Current Price per byte-year:{' '}
            <span className="font-extrabold text-solana-green">
              0.00000348 SOL
            </span>
          </h6>
          <hr className="my-6 border-gray-50 border-b-1" />

          <h6 className="text-sm font-bold uppercase text-gray-50">
            Current Sol price (USD):{' '}
            <span className="font-extrabold text-solana-green">
              {solanaPrice} USD
            </span>
          </h6>
        </div>
        <div className="flex-auto px-4 mb-6 lg:px-10">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await getMinimumBalanceForRentExemption();
            }}
          >
            <hr className="my-6 border-gray-50 border-b-1" />
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-gray-50">
              Calculator
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-gray-50"
                    htmlFor="kilobytes"
                  >
                    Kilobytes
                  </label>
                  <input
                    type="number"
                    max={10000}
                    className="w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                    value={kilobytes}
                    onChange={handleKilobytesInput}
                  />
                </div>
              </div>
              {/* TODO: Imporve UI */}
              <div className="w-full px-4 lg:w-6/12">
                <span className="block text-xs font-bold uppercase text-gray-50">
                  Approximate cost per epoch:
                  <hr className="my-1 border-gray-50 border-b-1" />
                  {perEpochLamports.toFixed(0)} LAMPORTS
                  <br /> {perEpochCost !== 0 ? perEpochCost.toFixed(9) : 0} SOL
                  <br /> ${(perEpochCost * solanaPrice).toFixed(5)} USD
                  <br className="mb-2" />
                  Approximate cost for rent-exempt:
                  <hr className="my-1 border-gray-50 border-b-1" />
                  {rentExemptLamports.toFixed(0)} LAMPORTS
                  <br /> {rentExemptCost !== 0
                    ? rentExemptCost.toFixed(9)
                    : 0}{' '}
                  SOL
                  <br /> ${(rentExemptCost * solanaPrice).toFixed(5)} USD
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RentCalculator;
