let savedState = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
/**
 * screen
 */
//% weight=100 color=#0fbc11 icon="🖵"
namespace screen {
    /**
     * Copy the current screen
     */
    //% block="Copy Screen"
    export function copyScreen(): void {savedState[1] = led.point(0, 0);savedState[2] = led.point(1, 0);savedState[3] = led.point(2, 0);savedState[4] = led.point(3, 0);savedState[5] = led.point(4, 0);savedState[6] = led.point(0, 1);savedState[7] = led.point(1, 1);savedState[8] = led.point(2, 1);savedState[9] = led.point(3, 1);savedState[10] = led.point(4, 1);savedState[11] = led.point(0, 2);savedState[12] = led.point(1, 2);savedState[13] = led.point(2, 2);savedState[14] = led.point(3, 2);savedState[15] = led.point(4, 2);savedState[16] = led.point(0, 3);savedState[17] = led.point(1, 3);savedState[18] = led.point(2, 3);savedState[19] = led.point(3, 3);savedState[20] = led.point(4, 3);savedState[21] = led.point(0, 4);savedState[22] = led.point(1, 4);savedState[23] = led.point(2, 4);savedState[24] = led.point(3, 4);savedState[25] = led.point(4, 4);}


    /**
     * Paste the copyed screen
     */
    //% block="Paste Screen"
    export function pasteScreen(): void {basic.clearScreen();if (savedState[1]) {led.plot(0, 0)} if (savedState[2]) {led.plot(1, 0)} if (savedState[3]) {led.plot(2, 0)} if (savedState[4]) {led.plot(3, 0)} if (savedState[5]) {led.plot(4, 0)} if (savedState[6]) {led.plot(0, 1)} if (savedState[7]) {led.plot(1, 1)} if (savedState[8]) {led.plot(2, 1)} if (savedState[9]) {led.plot(3, 1)} if (savedState[10]) {led.plot(4, 1)}if (savedState[11]) {led.plot(0, 2)} if (savedState[12]) {led.plot(1, 2)} if (savedState[13]) {led.plot(2, 2)} if (savedState[14]) {led.plot(3, 2)} if (savedState[15]) {led.plot(4, 2)} if (savedState[16]) {led.plot(0, 3)} if (savedState[17]) {led.plot(1, 3)} if (savedState[18]) {led.plot(2, 3)} if (savedState[19]) {led.plot(3, 3)} if (savedState[20]) {led.plot(4, 3)} if (savedState[21]) {led.plot(0, 4)} if (savedState[22]) {led.plot(1, 4)} if (savedState[23]) {led.plot(2, 4)} if (savedState[24]) {led.plot(3, 4)} if (savedState[25]) {led.plot(4, 4)}}
    
    
    
    /**
     * Rotate the current screen
     * 
     */
    //%block="rotate $n"
    export function rotate(R: number): void {
        if (led.point(0, 0)) {led.plot(0, 0)}
    }
}