import HeaderComponent from './HeaderComponent'
import ConversionComponent from './ConversionComponent'
import TypingComponent from './TypingComponent'

import { _postMessage } from '../helpers/api'
import _timeFormat from '../helpers/timeFormat'
import _scrollToDown from '../helpers/scrollToDown'

export default class AppComponent {
    constructor(root) {
        this.root = root
        
        this.messages = []
        this.value = ''
        this.isTyping = false
        
        this.render()
    }

    render() {
        const headerComponent = new HeaderComponent()
        const conversionComponent = new ConversionComponent(this.messages, this.isTyping)
        const typingComponent = new TypingComponent(this.value, this.isTyping, this.onSubmit.bind(this), this.onChangeValue.bind(this),)

        this.root.innerHTML = `
            <div class="fixed bottom-0 right-0 h-[700px] max-h-[calc(100vh-20px)] min-h-[150px] w-[calc(100%-20px)] sm:w-[380px] pr-5 pb-5">
                <div class="size-full flex flex-col mx-auto shadow-md rounded-xl overflow-hidden">
                    ${headerComponent.render()}
                    ${conversionComponent.render()}
                    ${typingComponent.render()}
                </div>
            </div>
        `

        typingComponent.listeners()
    }

    onChangeValue(value) {
        this.value = value
    }

    onSubmit(value) {
        this.value = ''
        const message = {
            message: value,
            created: _timeFormat(new Date()),
            isQuestion: true,
        }
        this.createMessage(message)
        this.fetchAnswer(message)
    }

    fetchAnswer(message) {
        const data = {
            message: message.message,
            session: null,
        }

        _postMessage(data)
            .then(response => {
                this.createMessage(response)
                this.isTyping = false
                this.render()
            })
            .catch(error => {
                console.error('Error: ', error)
            })
    }

    createMessage(data) {
        this.isTyping = true
        const newMessage = {
            message: data.message,
            created: _timeFormat(new Date()),
            isQuestion: !!data.isQuestion,
        }

        this.messages.push(newMessage)
        this.render()

        _scrollToDown('#chat')
    }
}
