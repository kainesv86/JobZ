import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

interface MainNavbarProps {}

const MainNavbar: React.FunctionComponent<MainNavbarProps> = () => {
    const navlink = [
        {
            name: 'Trang Chủ',
            id: uuid(),
            path: '/',
        },
        {
            name: 'Việc làm',
            id: uuid(),
            path: '/job',
        },
        // {
        //     name: 'Công ty',
        //     id: uuid(),
        //     path: '/companies',
        // },
        {
            name: 'Vị trí đã ứng tuyển',
            id: uuid(),
            path: '/applied-jobs',
        },
        {
            name: 'Danh sách ứng viên',
            id: uuid(),
            path: '/candidate',
        },
    ];

    const [toggle, setToggle] = React.useState(false);

    return (
        <>
            {/* main desktop menu sart*/}
            <div className="flex justify-center py-1 bg-white">
                <header className="flex items-center justify-between w-full max-w-7xl">
                    <div className="flex items-center justify-center gap-6">
                        <div className="flex items-center justify-center gap-2">
                            <Link href="/">
                                <img src="/assets/images/logo.png" className="h-16 cursor-pointer" alt="Job Z" />
                            </Link>
                            {/* <div className="flex items-center w-full h-9">
                                <input
                                    placeholder="Tìm kiếm"
                                    className="rounded-l-2xl text-gray-900 placeholder:text-gray-600 w-full max-w-[528px] bg-gray-200  outline-none px-4 py-2 h-full "
                                />
                                <button className="flex items-center justify-center w-16 h-full bg-indigo-500 rounded-r-2xl">
                                    <MagnifyingGlassIcon className="w-6 h-6" />
                                </button>
                            </div> */}
                        </div>
                    </div>
                    <nav>
                        <ul className="flex items-center justify-center gap-5">
                            {navlink.map((item) => (
                                <Link key={item.id} href={item.path}>
                                    <li className="px-4 py-2 font-semibold text-white bg-indigo-500 cursor-pointer rounded-3xl">{item.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center gap-2">
                            <p className="text-base font-medium text-gray-800">Tài</p>
                            <div className="overflow-hidden rounded-full h-14 w-14">
                                <img src={'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg'} alt="avatar" />
                            </div>
                        </div>
                        <div className="relative ">
                            <Bars3Icon className="w-10 h-10 text-indigo-400 cursor-pointer" onClick={() => setToggle(!toggle)} />
                            {toggle ? (
                                <div className="absolute right-0 z-[999] flex flex-col w-40 px-2 py-2 overflow-hidden text-white bg-indigo-500 rounded-md top-12">
                                    <Link href={'/auth/login'}>
                                        <button className="border-b-2 border-white border-solid">Đăng nhập</button>
                                    </Link>
                                    <Link href={'/post-new-recruit'}>
                                        <button className="w-full border-b-2 border-solid">Đăng bài</button>
                                    </Link>
                                    <Link href={''}>
                                        <button className="w-full">Đăng xuất</button>
                                    </Link>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </header>
            </div>
            {/* main desktop menu end */}
        </>
    );
};

export default MainNavbar;
