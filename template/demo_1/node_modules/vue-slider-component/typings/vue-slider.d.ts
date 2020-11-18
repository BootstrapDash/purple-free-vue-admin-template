import { Vue } from 'vue-property-decorator';
import { Value, DataObject, MarksProp, Styles, DotOption, Dot, Direction, Position, ProcessProp, Process, TooltipProp, TooltipFormatter } from './typings';
import { HandleFunction } from './utils';
import Control from './utils/control';
import State, { StateMap } from './utils/state';
import './styles/slider.scss';
export declare const SliderState: StateMap;
export default class VueSlider extends Vue {
    control: Control;
    states: State;
    scale: number;
    focusDotIndex: number;
    $refs: {
        container: HTMLDivElement;
        rail: HTMLDivElement;
    };
    $el: HTMLDivElement;
    value: Value | Value[];
    silent: boolean;
    direction: Direction;
    width?: number | string;
    height?: number | string;
    dotSize: [number, number] | number;
    contained: boolean;
    min: number;
    max: number;
    interval: number;
    disabled: boolean;
    clickable: boolean;
    dragOnClick: boolean;
    duration: number;
    data?: Value[] | object[] | DataObject;
    dataValue: string;
    dataLabel: string;
    lazy: boolean;
    tooltip: TooltipProp;
    tooltipPlacement?: Position | Position[];
    tooltipFormatter?: TooltipFormatter | TooltipFormatter[];
    useKeyboard?: boolean;
    keydownHook: (e: KeyboardEvent) => HandleFunction | boolean;
    enableCross: boolean;
    fixed: boolean;
    order: boolean;
    minRange?: number;
    maxRange?: number;
    marks?: MarksProp;
    process?: ProcessProp;
    zoom?: number;
    included?: boolean;
    adsorb?: boolean;
    hideLabel?: boolean;
    dotOptions?: DotOption | DotOption[];
    dotAttrs?: object;
    railStyle?: Styles;
    processStyle?: Styles;
    dotStyle?: Styles;
    tooltipStyle?: Styles;
    stepStyle?: Styles;
    stepActiveStyle?: Styles;
    labelStyle?: Styles;
    labelActiveStyle?: Styles;
    get tailSize(): string;
    get containerClasses(): (string | string[] | {
        'vue-slider-disabled': boolean;
    })[];
    get containerStyles(): {
        padding: string;
        width: string;
        height: string;
    };
    get processArray(): Process[];
    get dotBaseStyle(): {
        width: string;
        height: string;
    };
    get mainDirection(): string;
    get isHorizontal(): boolean;
    get isReverse(): boolean;
    get tooltipDirections(): Position[];
    get dots(): Dot[];
    get animateTime(): number;
    get canSort(): boolean;
    isObjectData(data?: Value[] | object[] | DataObject): data is DataObject;
    isObjectArrayData(data?: Value[] | object[] | DataObject): data is object[];
    get sliderData(): undefined | Value[];
    get sliderMarks(): undefined | MarksProp;
    get sliderTooltipFormatter(): undefined | TooltipFormatter | TooltipFormatter[];
    onValueChanged(): void;
    created(): void;
    mounted(): void;
    beforeDestroy(): void;
    bindEvent(): void;
    unbindEvent(): void;
    setScale(): void;
    initControl(): void;
    private syncValueByPos;
    private get isNotSync();
    private isDiff;
    private emitError;
    /**
     * Get the drag range of the slider
     *
     * @private
     * @param {number} index slider index
     * @returns {[number, number]} range [start, end]
     * @memberof VueSlider
     */
    private get dragRange();
    private dragStartOnProcess;
    private dragStart;
    private dragMove;
    private isCrossDot;
    private dragEnd;
    private blurHandle;
    private clickHandle;
    focus(index?: number): void;
    blur(): void;
    getValue(): string | number | (string | number)[];
    getIndex(): number | number[];
    setValue(value: Value | Value[]): void;
    setIndex(index: number | number[]): void;
    setValueByPos(pos: number): false | undefined;
    keydownHandle(e: KeyboardEvent): false | undefined;
    private getPosByEvent;
    private renderSlot;
    render(): JSX.Element;
}
