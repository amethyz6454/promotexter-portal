const usePasswordStrength = (password) => {
    const fieldStrength = [
        "Provide a password",
        "Weak",
        "Fair",
        "Good",
        "Strong",
    ];
    const progressColor = ["mono", "danger", "warning", "info", "success"];
    const getStrength = () => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[A-Z]+/)) strength++;
        if (password.match(/[0-9]+/)) strength++;
        if (password.match(/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/)) strength++;
        return strength;
    };

    const strength = getStrength();
    const value = (strength / 4) * 100;

    return {
        progressColor: progressColor[strength],
        progressValue: value,
        textFeedback: fieldStrength[strength],
    };
};

export default usePasswordStrength;
