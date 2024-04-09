const _scrollToDown = (selector) => {
    setTimeout(() => {
        document.querySelector(selector).scrollTop = document.querySelector(selector).scrollHeight
    }, 0)
}

export default _scrollToDown