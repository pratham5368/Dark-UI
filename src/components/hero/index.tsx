// index.js
import { pintura } from '@pqina/pintura/pintura.module.css';
import { index as pinturaTheme } from './index.module.css';

export default function Page() {
    return <PinturaEditor className={`${pintura} ${pinturaTheme}`} />;
}