import _get from 'lodash.get';
import { NextPage } from 'next';
import * as React from 'react';

import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: 'How do you make holy water?',
        answer: 'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

    // More questions...
];

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
    return (
        <div className="bg-white mb-80">
            <main>
                {/* Hero section */}
                <div className="relative pb-16 overflow-hidden bg-gray-900 isolate pt-14 sm:pb-20">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full -z-10"
                    />
                    <div className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80" aria-hidden="true">
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="px-6 mx-auto max-w-7xl lg:px-8">
                        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Tìm kiếm việc làm dễ dàng dành cho GenZ</h1>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Trải nghiệm tạo hồ sơ ứng tuyển, tìm việc, ứng tuyển và hơn thế nữa - chỉ với một ứng dụng duy nhất. Bắt đầu ngay
                                    hôm nay!
                                </p>
                                <div className="flex items-center justify-center mt-10 gap-x-6">
                                    <Link href={'/job'}>
                                        <a className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                                            Bắt đầu ngay
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Logo cloud */}
                        <div className="grid items-center max-w-lg grid-cols-4 mx-auto gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <img
                                className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                            <img
                                className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <img
                                className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>

                {/* Feature section */}
                <div className="mt-32 sm:mt-56">
                    <div className="px-6 mx-auto max-w-7xl lg:px-8">
                        <div className="max-w-2xl mx-auto sm:text-center">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Chúng tôi có tất cả công việc bạn cần</h2>
                            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Không có kinh nghiệm? không thành vấn đề
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Chúng tôi có hàng ngàn công việc từ các công ty hàng đầu trên thế giới. Tất cả đều có thể được tìm thấy và ứng tuyển
                            </p>
                        </div>
                    </div>
                    <div className="relative pt-16 overflow-hidden">
                        <div className="px-6 mx-auto max-w-7xl lg:px-8">
                            <img
                                src="/assets/images/landing-1.png"
                                alt="App screenshot"
                                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                                width={2432}
                                height={1442}
                            />
                            <div className="relative" aria-hidden="true">
                                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial section */}
                <div className="relative z-10 pb-20 mt-32 bg-gray-900 sm:mt-56 sm:pb-24 xl:pb-0">
                    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                        <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
                            <div
                                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center px-6 mx-auto max-w-7xl gap-x-8 gap-y-10 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                        <div className="w-full max-w-2xl -mt-8 xl:-mb-8 xl:w-96 xl:flex-none">
                            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                                <img
                                    className="absolute inset-0 object-cover w-full h-full bg-gray-800 shadow-2xl rounded-2xl"
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                            <figure className="relative pt-6 isolate sm:pt-12">
                                <svg
                                    viewBox="0 0 162 128"
                                    fill="none"
                                    aria-hidden="true"
                                    className="absolute top-0 left-0 h-32 -z-10 stroke-white/20"
                                >
                                    <path
                                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                    />
                                    <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                                </svg>
                                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                                    <p>
                                        Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc.
                                        Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.
                                    </p>
                                </blockquote>
                                <figcaption className="mt-8 text-base">
                                    <div className="font-semibold text-white">Judith Black</div>
                                    <div className="mt-1 text-gray-400">CEO of Tuple</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                {/* FAQ section */}
                <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-56 lg:px-8">
                    <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                    <span className="flex items-center ml-6 h-7">
                                                        {open ? (
                                                            <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="pr-12 mt-2">
                                                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
