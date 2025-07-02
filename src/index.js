import { WeekPlannerCard } from './card';
import { WeekPlannerCardEditor } from "./editor";
import { version } from '../package.json';

customElements.define(
    'week-planner-card-jeff',
    WeekPlannerCard
);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'week-planner-card-jeff',
    name: 'Week Planner Card (Jeff Update)',
    description: 'Card to display events for a number of days from one or several calendars.'
});

customElements.define(
    'week-planner-card-editor-jeff',
    WeekPlannerCardEditor
);

console.info(
    `%c WEEK-PLANNER-CARD %c v${version} `,
    'color: white; background: black; font-weight: 700;',
    'color: black; background: white; font-weight: 700;',
);