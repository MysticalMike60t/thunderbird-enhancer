const theme = {
    isDark() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    async getColors() {
        const t = await messenger.theme.getCurrent();
        return t.colors;
    },
};

export default theme;
