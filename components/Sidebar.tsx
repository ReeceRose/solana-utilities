import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const [collapseShow, setCollapseShow] = useState('hidden');
  const router = useRouter();

  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-gray-900 shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link href="/">
            <a className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase hover:text-solana-green text-gray-50 md:block md:pb-2 whitespace-nowrap">
              Solana Utilities
            </a>
          </Link>

          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            <div className="block pb-4 mb-4 border-b border-gray-200 border-solid md:min-w-full md:hidden">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase hover:text-solana-green text-gray-50 md:block md:pb-2 whitespace-nowrap">
                      Solana Calculators
                    </a>
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <hr className="my-4 md:min-w-full" />
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase text-gray-50 md:min-w-full">
              Calculators
            </h6>

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              <li className="items-center">
                <Link href="/calculators/rent-calculator">
                  <a
                    className={
                      'text-xs uppercase py-3 font-bold block ' +
                      (router.pathname.indexOf(
                        '/calculators/rent-calculator'
                      ) !== -1
                        ? 'text-solana-green hover:text-solana-green-hover -hover'
                        : 'text-solana-600 hover:text-solana-green  text-gray-50')
                    }
                  >
                    <i
                      className={
                        'fas fa-calculator mr-2 text-sm ' +
                        (router.pathname.indexOf(
                          '/calculators/rent-calculator'
                        ) !== -1
                          ? 'opacity-75'
                          : 'text-gray-50')
                      }
                    ></i>{' '}
                    Rent Calculator
                  </a>
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase text-gray-50 md:min-w-full">
              Converters
            </h6>

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              <li className="items-center">
                <Link href="/converters/currency">
                  <a
                    className={
                      'text-xs uppercase py-3 font-bold block ' +
                      (router.pathname.indexOf('/converters/currency') !== -1
                        ? 'text-solana-green hover:text-solana-green-hover -hover'
                        : 'text-solana-600 hover:text-solana-green  text-gray-50')
                    }
                  >
                    <i
                      className={
                        'fas fa-exchange-alt mr-2 text-sm ' +
                        (router.pathname.indexOf('/converters/currency') !== -1
                          ? 'opacity-75'
                          : 'text-gray-50')
                      }
                    ></i>{' '}
                    Currency Converter
                  </a>
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase text-gray-50 md:min-w-full">
              About
            </h6>

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              <li className="items-center">
                <Link href="https://github.com/reecerose/solana-utilities">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className={
                      'text-xs uppercase py-3 font-bold block hover:text-solana-green text-gray-50'
                    }
                  >
                    <i
                      className={'fab fa-github mr-2 text-sm text-gray-50'}
                    ></i>{' '}
                    GitHub
                  </a>
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase text-gray-50 md:min-w-full">
              Copyright © {new Date().getFullYear()} <br />
              <Link href="https://github.com/ReeceRose/">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-solana-green "
                >
                  Reece Rose
                </a>
              </Link>
            </h6>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
