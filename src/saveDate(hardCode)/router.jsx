import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

// TODO: разобрать функцию withRouter после урока по хукам

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}/>
        );
    }

    return ComponentWithRouterProp;
}