const SearchTerm = () => {
    return (
        <>
            <header className="flex items-center justify-between p-4 bg-white shadow-md">
                <img
                    alt="Logo"
                    className="h-12"
                    height={50}
                    src="https://storage.googleapis.com/a1aa/image/k8dDLTTmjjoeMiWwGl8ff0pNqMm7nd8ePsq6QAfTjNjci19cC.jpg"
                    width={50}
                />
                <div className="relative w-1/2">
                    <input
                        className="w-full p-2 border border-gray-300 rounded-full"
                        placeholder="search"
                        type="text"
                    />
                </div>
            </header>
            <main className="flex flex-col items-center mt-8">
                <h1 className="mb-4 text-2xl text-white">検索結果</h1>
                <div className="w-3/4 p-6 bg-red-400 rounded-lg shadow-lg">
                    <div className="flex mb-4 space-x-4">
                        <button className="px-4 py-2 text-white bg-red-600 rounded-tl-lg rounded-tr-lg">
                            人気順
                        </button>
                        <button className="px-4 py-2 text-white">新着順</button>
                        <button className="px-4 py-2 text-white">
                            カテゴリー
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <img
                                alt="Coincheck logo"
                                className="w-16 h-16"
                                height={100}
                                src="https://storage.googleapis.com/a1aa/image/sT10tHIp2T7nHhalvrFp45qRqYRQe3afKiKVSbfLycUrYdPnA.jpg"
                                width={100}
                            />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-bold">Name</h2>
                                <p className="text-gray-500">Category</p>
                            </div>
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <img
                                alt="Coincheck logo"
                                className="w-16 h-16"
                                height={100}
                                src="https://storage.googleapis.com/a1aa/image/sT10tHIp2T7nHhalvrFp45qRqYRQe3afKiKVSbfLycUrYdPnA.jpg"
                                width={100}
                            />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-bold">Name</h2>
                                <p className="text-gray-500">Category</p>
                            </div>
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <img
                                alt="Coincheck logo"
                                className="w-16 h-16"
                                height={100}
                                src="https://storage.googleapis.com/a1aa/image/sT10tHIp2T7nHhalvrFp45qRqYRQe3afKiKVSbfLycUrYdPnA.jpg"
                                width={100}
                            />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-bold">Name</h2>
                                <p className="text-gray-500">Category</p>
                            </div>
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    </div>
                </div>
            </main>
            <footer className="p-4 mt-8 bg-white shadow-md">
                <div className="flex items-center justify-between">
                    <img
                        alt="Footer Logo"
                        className="h-12"
                        height={50}
                        src="https://storage.googleapis.com/a1aa/image/ysLsZPXi8ZrNBRRoEOyJ8Dt3dirfPaZFO9zugnKrWePWsunTA.jpg"
                        width={50}
                    />
                    <div className="flex space-x-8">
                        <div className="text-center">
                            <h2 className="font-bold">Text Text</h2>
                            <ul className="text-gray-500">
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold">Text Text</h2>
                            <ul className="text-gray-500">
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold">Text Text</h2>
                            <ul className="text-gray-500">
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold">Text Text</h2>
                            <ul className="text-gray-500">
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold">Text Text</h2>
                            <ul className="text-gray-500">
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                                <li>Footer Link</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default SearchTerm;
