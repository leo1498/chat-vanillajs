export default class TypingComponent {
    constructor(value, isTyping, onSubmit, onChangeValue) {
        this.value = value
        this.isTyping = isTyping
        this.onSubmit = onSubmit
        this.onChangeValue = onChangeValue
    }

    render() {
        return `
            <div class="bg-white pt-2 pb-3 z-20">
                <div class="flex items-center h-11 px-3 relative">
                    <input 
                        class="border-[1px] border-gray-200 h-full w-full px-4 py-3 pr-16 rounded-3xl text-sm focus:outline-black placeholder:font-light resize-none" 
                        placeholder="Type a message..." 
                        autocomplete="off"
                        value="${this.value}"
                        id="value"
                    >
                    ${!this.isTyping
                        ? `
                            <button 
                                class="absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center size-11 pl-[2px] rounded-full"
                                id="submit"
                            >
                                <svg width="20px" height="20px" viewBox="0 0 20 20"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#000"><path d="M18,11 L2,19 L2,11 L18,11 Z M2,1 L18,9 L2,9 L2,1 Z"></path></g></g></svg>
                            </button>
                        `
                        : ``
                    }
                </div>
            </div>
        `
    }

    listeners() {
        const input = document.getElementById('value')
        input.addEventListener('input', (e) => {
            this.value = e.target.value
            this.onChangeValue(this.value)
        })

        const submit = document.getElementById('submit')
        submit?.addEventListener('click', () => {
            if (this.value.trim()) {
                this.onSubmit(this.value)
            }
        })
    }
}
