import React, { Component } from 'react';
import { Container, Content, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { getUserToken } from '../../redux/actions/PersistentAuthActions';

class AuthLoading extends Component {
    componentDidMount() {
        this.bootstrapAsync();
    }

    bootstrapAsync = () => {
        this.props.getUserToken().then(() => {
            if (this.props.token != null) {
                this.props.navigation.navigate('Home');
            } else {
                this.props.navigation.navigate('LogIn');
            }
        })
        .catch(error => {
            this.setState({ error });
        });
    };

    render() {
        return (
            <Container>
                <Content>
                    <Spinner />
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    token: state.token,
});

const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);