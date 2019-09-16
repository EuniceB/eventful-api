import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks'
import 'Images/loading.gif'
/**
 * withData
 * Higher Order Component (HOC) used to simplify the use of react-hooks and graphql throughout the application
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
const withData = (WrappedComponent, query, fun) => {

    const DataFetcher = (props) => {
        let variables = fun(props)
        const { loading, error, data } = useQuery(query, { variables });
            if (loading) {
                return (<div className="loading"><img src="/images/loading.gif"/></div>);
            }
            if (error) {
                console.error("Error while fetching data: " + error)
                return (<p>Error</p>);
            }
            return (<WrappedComponent loading={loading} error={error} data={data} {...props} />)
    }

    class NewComponent extends Component {
        render(){
            return (<DataFetcher {...this.props}/>)
        }
    }
    return NewComponent;
}
export default withData