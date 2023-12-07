
import './index.html';
import './index.scss';

import Header from '../Header';
import Enjoy from '../Home/enjoy';
import Choose from '../Home/choose';


const header = document.getElementById('header');
header.append(Header);


const root = document.getElementById('root');
root.append(Enjoy);
root.append(Choose);

