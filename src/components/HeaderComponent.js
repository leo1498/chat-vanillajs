export default class Header {
    render() {
        return `
            <div class="bg-[#000] flex justify-between py-3 px-4 z-20">
                <div class="mt-1 text-white opacity-95 text-base font-bold uppercase">Arco.bot</div>
                <div class="flex gap-2">
                    <button 
                        class="p-1 rounded-sm text-white opacity-7 cursor-pointer hover:bg-gray-900"
                        id="closeChat"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `
    }
}
