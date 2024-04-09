const _timeFormat = (date) => {
    const d = date
    const ampm = (d.getHours() >= 12) ? 'PM' : 'AM'
    let hours = d.getHours() % 12
    hours = (hours === 0) ? 12 : hours
    const minutes = String(d.getMinutes()).padStart(2, '0')

    return `${hours}:${minutes} ${ampm}`
}

export default _timeFormat
