function KeyGenerator(title: string) {
    return title + Math.ceil(Math.random() * 10000000000);
}

export default KeyGenerator;