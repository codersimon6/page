const MyFooter = () => {
    return (
        <>
            <Button
                type="link"
                href="https://twitter.com/fngg29154511"
                target="_blank"
                icon={<TwitterOutlined/>}
                size={"middle"}
            />
            <Button
                type="link"
                href="https://github.com"
                target="_blank"
                icon={<GithubOutlined/>}
                size={"middle"}
            />
        </>
    )
}
export default MyFooter
