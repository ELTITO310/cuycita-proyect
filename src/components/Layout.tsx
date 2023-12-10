import { ReactNode, useEffect, useState, useMemo } from 'react';
import Nav from './Layouts/Nav'
import virgenSong from '../assets/sounds/music_virgen.mp3';
import anheloSong from '../assets/sounds/music_anhelo.mp3';
import locuraSong from '../assets/sounds/music_que_locura_enamorarme_de_ti.mp3';
import sobredosisSong from '../assets/sounds/music_sobredosis.mp3'
import { useGlobalAudioPlayer } from 'react-use-audio-player';

const Layout = ({children}: {
    children: ReactNode
}) => {

    const songs = useMemo(() => {
        return [sobredosisSong, virgenSong, anheloSong, locuraSong]
    }, [])
    const [songIndex, setSongIndex] = useState(0);

    const { load } = useGlobalAudioPlayer();

    useEffect(() => {
    load(songs[songIndex], {
        autoplay: true,
        initialVolume: 0.2,
        onend: () => setSongIndex(songIndex + 1)
    });
    }, [songIndex, load, songs]);

    return ( <>
        <main>
            <Nav />
            {children}
        </main>
    </> );
}
 
export default Layout;