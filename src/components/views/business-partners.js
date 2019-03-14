import React, { Component } from 'react';

import Hero from '../hero';
import BusinessPartnerCard from '../business-partner-card';

import BPImg from '../../assets/images/bpimg.jpeg';

import CompNovaImg from '../../assets/images/compnova.jpg';
import TransmedaImg from '../../assets/images/transmeda.png';
import TechFriendsImg from '../../assets/images/techfriends.jpg';

const partners = [
    {
        img: CompNovaImg,
        hint: 'Compnova',
        title: 'Compnova',
        address: 'FLORIDA 2450 Sand Lake Rd, Orlando, FL 32809'
    },
    {
        img: TransmedaImg,
        hint: 'Transmeda',
        title: 'Transmeda',
        address: '25 Linda Ct, Staten Island, NT 10302, United States'
    },
    {
        img: TechFriendsImg,
        hint: 'Tech Friends',
        title: 'Tech Friends',
        address: '4423 Fortran Ct Suite # 33, San Jose CA 95134'
    }
]

class BusinessPartners extends Component {
    render() {
        return(
            <React.Fragment>
                <Hero heroImg={BPImg} title="Business Partners"/>
                <div style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', width:'40%', paddingTop: '2%', paddingBottom: '2%'}}>
                    {partners.map((n, i) => {
                        return (
                            <BusinessPartnerCard img={n.img} hint={n.hint} title={n.title} address={n.address} key={i}/>
                        )
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default BusinessPartners;