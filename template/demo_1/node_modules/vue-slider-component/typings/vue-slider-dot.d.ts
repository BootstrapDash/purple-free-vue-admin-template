import { Vue } from 'vue-property-decorator';
import { Value, Styles, Position, TooltipProp, TooltipFormatter } from './typings';
import './styles/dot.scss';
export default class VueSliderDot extends Vue {
    $refs: {
        dot: HTMLDivElement;
    };
    value: Value;
    tooltip: TooltipProp;
    dotStyle?: Styles;
    tooltipStyle?: Styles;
    tooltipPlacement: Position;
    tooltipFormatter?: TooltipFormatter;
    focus: boolean;
    disabled: boolean;
    get dotClasses(): (string | {
        'vue-slider-dot-hover': boolean;
        'vue-slider-dot-disabled': boolean;
        'vue-slider-dot-focus': boolean;
    })[];
    get handleClasses(): (string | {
        'vue-slider-dot-handle-disabled': boolean;
        'vue-slider-dot-handle-focus': boolean;
    })[];
    get tooltipClasses(): (string | string[] | {
        'vue-slider-dot-tooltip-show': boolean;
    })[];
    get tooltipInnerClasses(): (string | string[] | {
        'vue-slider-dot-tooltip-inner-disabled': boolean;
        'vue-slider-dot-tooltip-inner-focus': boolean;
    })[];
    get showTooltip(): boolean;
    get tooltipValue(): Value;
    dragStart(e: MouseEvent | TouchEvent): false | undefined;
    render(): JSX.Element;
}
