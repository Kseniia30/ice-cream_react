import HotCoffee from 'components/Coffee/HotCoffee';
import IceCoffee from 'components/Coffee/IceCoffee';
import { FeedBacks } from 'components/Feedbacks/FeedBacks';
import Coffee from 'pages/Coffe';
import History from 'pages/History';
import { HomePage } from 'pages/HomePage';
import IceCream from 'pages/IceCream';
import { LayOut } from 'pages/Layout';
import MilkShakes from 'pages/MilkShakes';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LayOut />}>
                <Route index element={<HomePage />} />
                <Route path="history" element={<History />} />
                <Route path="icecream" element={<IceCream />} />
                <Route path="coffee" element={<Coffee />}>
                    <Route path="hot" element={<HotCoffee />} />
                    <Route path="ice" element={<IceCoffee />} />
                </Route>
                <Route path="milkshakes" element={<MilkShakes />} />
                <Route path="feedbacks" element={<FeedBacks />} />
            </Route>
        </Routes>
    );
}

export default App;
