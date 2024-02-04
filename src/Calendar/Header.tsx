import { Dayjs } from "dayjs";
import LocaleContext from './LocaleContext';
import { useContext } from "react";
import allLocales from "./locale";
import locale from 'dayjs';
interface HeaderProps {
    curMonth: Dayjs;
    prevMonthHandler: () => void;
    nextMonthHandler: () => void;
    todayHandler: () => void;
}
function Header(props: HeaderProps) {

    const {
        curMonth,
        prevMonthHandler,
        nextMonthHandler,
        todayHandler,
    } = props;

    const localeContext = useContext(LocaleContext)
    const CalendarContent = allLocales[localeContext.locale]

    return <div className="calendar-header">
        <div className="calendar-header-left">
            <div className="calendar-header-icon" onClick={prevMonthHandler}>&lt;</div>
            <div className="calendar-header-value">{curMonth.format(CalendarContent.formatMonth)}</div>
            <div className="calendar-header-icon" onClick={nextMonthHandler}>&gt;</div>
            <button className="calendar-header-btn" onClick={todayHandler}>{CalendarContent.today}</button>
        </div>
    </div>
}

export default Header;
