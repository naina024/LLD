import { LANG } from "../utils/lang.constants";

const About = ({lang}) => {
    const data = LANG[lang] || {};
    return (
        <>
            <h4>{data.title}</h4>
            <div>
                {data.description}
            </div>
        </>
    );
}

export default About;