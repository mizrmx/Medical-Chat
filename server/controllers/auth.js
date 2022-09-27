const signup = () => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;

        const userId = crypto

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

const login = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};


module.exports = { signup, login }