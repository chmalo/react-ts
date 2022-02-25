import {Columns} from "./Columns";

const numbers: number[] = [1, 2, 3, 4, 5];

export function Table() {
    return (
        <table>
            <tbody>
                <Columns numbers={numbers}/>
            </tbody>
        </table>
    );
}