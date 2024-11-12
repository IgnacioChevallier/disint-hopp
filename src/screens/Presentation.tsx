import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button/Button';
import Icon from "../components/icon/Icon";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const navigateToNotifications = () => {
        navigate('/notifications');
    };

    const navigateToRouteList = () => {
        navigate('/route-list');
    };

    const openStorybook = () => {
        window.open("https://ignaciochevallier.github.io/disint-hopp/?path=/docs/configure-your-project--docs", "_blank");
    };

    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-background-main text-center p-4">
            <div className="flex flex-col items-center">
                <Icon name="hopp" size="xlarge" color="#0095FF" />
                <h1 className="text-3xl font-bold mb-8">Hopp</h1>
            </div>

            <div className="flex flex-col gap-4 mb-8">
                <Button
                    text="Notifications"
                    color="primary"
                    onClick={navigateToNotifications}
                    size="medium"
                    rounded={true}
                />
                <Button
                    text="Route List"
                    color="primary"
                    onClick={navigateToRouteList}
                    size="medium"
                    rounded={true}
                />
                <Button
                    text="Storybook"
                    color="danger"
                    onClick={openStorybook}
                    size="medium"
                    rounded={true}
                />
            </div>

            <footer className="text-sm text-gray-600">
                <h2 className="font-semibold mb-2">Creators:</h2>
                <ul className="space-y-1">
                    <li>Bogo Santos</li>
                    <li>Chevallier Boutell Ignacio</li>
                    <li>Chialva Matias</li>
                    <li>Pochat Federico</li>
                    <li>Sazaki Marcos</li>
                    <li>Valle Durán Tomás</li>
                    <li>Zizzi Francisco</li>
                </ul>
            </footer>
        </div>
    );
};

export default HomePage;