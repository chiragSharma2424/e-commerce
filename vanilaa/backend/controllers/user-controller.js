

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email } = req.body;
    } catch(err) {
        console.log(`error in login controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}