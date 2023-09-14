const Section = (Component) => {
    return (props) => {
        const style = {padding: "2rem", display: "flex", justifyContent: "center"}

        return <Component style={style} {...props} />
    }
}

export default Section