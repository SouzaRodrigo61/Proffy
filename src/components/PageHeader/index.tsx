import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeaderModel } from '../../model/PageHeaderModel';

import logo from '../../assets/images/logo.svg';
import back from '../../assets/images/icons/back.svg';

import './styles.css';

const PageHeader: React.FC<PageHeaderModel> = ({
    title,
    description,
    children,
}) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={back} alt="voltar" />
                </Link>
                <img src={logo} alt="proffy" />
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                {description !== '' && <p>{description}</p>}
                {children}
            </div>
        </header>
    );
};

export default PageHeader;
