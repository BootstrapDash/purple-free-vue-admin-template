import { Vue } from 'vue-property-decorator';
import { Mark, Styles } from './typings';
import './styles/mark.scss';
export default class VueSlideMark extends Vue {
    mark: Mark;
    hideLabel?: boolean;
    stepStyle?: Styles;
    stepActiveStyle?: Styles;
    labelStyle?: Styles;
    labelActiveStyle?: Styles;
    get marksClasses(): (string | {
        'vue-slider-mark-active': boolean | undefined;
    })[];
    get stepClasses(): (string | {
        'vue-slider-mark-step-active': boolean | undefined;
    })[];
    get labelClasses(): (string | {
        'vue-slider-mark-label-active': boolean | undefined;
    })[];
    labelClickHandle(e: MouseEvent | TouchEvent): void;
    render(): JSX.Element;
}
