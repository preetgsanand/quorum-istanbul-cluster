import React, {Component} from 'react';
import {Row} from 'reactstrap';
import Get from './Get';
import Set from './Set';
import SimpleStorageContract from '../../truffle/build/contracts/SimpleStorage.json';

class SimpleStorage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contractInstance : null
        }
    }

    componentDidUpdate() {
        this.props.web3.eth.getAccounts((err, accounts) => {
            console.log(accounts);
            if(!err && accounts.length !== 0) {
                const contract = new this.props.web3.eth.Contract(SimpleStorageContract.abi, {
                    from: accounts[0],
                    gas: 0
                });
                contract.deploy({
                    data: SimpleStorageContract.bytecode,
                    arguments: [34]
                }).send({
                    from: accounts[0],
                    gas: 1500000,
                    gasPrice: '0'
                })
                .then(function(newContractInstance) {
                    console.log(newContractInstance);
                    // newContractInstance.methods
                    //                     .multiply(10,2)
                    //                     .call()
                    //                     .then((result) => {
                    //                         console.log(result);
                    //                     })
                })
            }
        });
    }

    onSubmitStorage(value) {
        console.log("Setting storage - ",value);
    }

    getStorage() {
        console.log("Getting storage")
    }

    render() {
        return (
            <Row className="pt-4 pr-4 pl-4">
                <Set 
                   onSubmitStorage={(value) => this.onSubmitStorage(value)}/>
                <Get 
                    getStorage={() => this.getStorage()}/>
            </Row>
        );
    }
}

export default SimpleStorage;