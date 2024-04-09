export default class ConversionComponent {
    constructor(messages, isTyping) {
        this.messages = messages
        this.isTyping = isTyping
    }

    render() {
        return `
            <div class="bg-white flex-1 pt-4 px-3 overflow-y-auto scrolling-touch" id="chat">
                ${this.messages && this.messages.length > 0
                    ? this.messages.map(item => `
                        ${item.isQuestion
                            ? `
                                <div class="flex items-end my-2">
                                    <div class="flex flex-col w-full">
                                        <div class="flex items-center justify-end group">
                                            <div class="text-gray-500 text-xs mr-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${item.created}
                                            </div>
                                            <div class="bg-[#000] text-gray-100 max-w-[80%] rounded-2xl py-2 px-3 text-sm">
                                                ${item.message}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `
                            : `
                                <div class="flex items-end my-2">
                                    <div class="bg-teal-700 rounded-full min-w-7 size-7 mr-1"></div>
                                    <div class="flex flex-col w-full">
                                        <div class="flex items-center group">
                                            <div class="bg-gray-200 max-w-[80%] rounded-2xl rounded-es-none mb-[2px] py-2 px-3 text-sm break-words">
                                                ${item.message}
                                            </div>
                                            <div class="text-gray-500 text-xs ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${item.created}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `
                        }
                    `).join('')
                    : ''
                }
                ${this.renderLoader()}
            </div>
        `
    }
    

    renderLoader() {
        if (this.isTyping) {
            return `
                <div class="flex items-end my-2">
                    <div class="bg-teal-700 rounded-full min-w-7 size-7 mr-1"></div>
                    <div class="flex flex-col">
                        <div class="rounded-2xl rounded-es-none py-2 px-3 text-sm">
                            <div class="flex gap-1 pt-1 justify-center items-center">
                                <span class="sr-only">Loading...</span>
                                <div class="size-[7px] bg-gray-300 rounded-full animate-bounce" style="animation-delay:-0.3s"></div>
                                <div class="size-[7px] bg-gray-300 rounded-full animate-bounce" style="animation-delay:-0.15s"></div>
                                <div class="size-[7px] bg-gray-300 rounded-full animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }

        return ''
    }
}
