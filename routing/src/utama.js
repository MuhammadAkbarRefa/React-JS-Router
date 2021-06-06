import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Component/beranda';
import TentangSaya from './Component/tentangsaya';
import Karya from './Component/karya';
import Kontak from './Component/kontak';
import List from './List';
import Pegawai from './Pegawai';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/karya" component={Karya} />
        <Route path="/kontak" component={Kontak} />
        <Route path="/list" component={List} />
        <Route path="/pegawai" component={Pegawai} />
    </Switch>
);

export default Utama;