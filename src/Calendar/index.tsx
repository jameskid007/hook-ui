import dayjs, { Dayjs, locale } from 'dayjs';
import MonthCalendar from './MonthCalendar';
import './index.scss';
import cs from 'classnames'
import { CSSProperties, ReactNode, useState } from 'react';
import LocaleContext from './LocaleContext';
import Header from './Header';

export interface CalendarProps {
  value: Dayjs
}

export interface CalendarProps {
  /**
   * 值
   */
  value: Dayjs,
  /**
   * 行内样式
   */
  style?: CSSProperties,
  /**
   * 类名
   */
  className?: string | string[],
  /**
   * 定制日期显示，会完全覆盖日期单元格
   * @param currentDate 当前时间
   * @returns 
   */
  dateRender?: (currentDate: Dayjs) => ReactNode
  /**
   * 定制日期单元格，内容会被添加到单元格内
   * @param currentDate 当前时间
   * @returns 
   */
  dateInnerContent?: (currentDate: Dayjs) => ReactNode,
  /**
   * 国际化
   */
  locale?: string,
  /**
   * 修改事件
   * @param date 时间
   * @returns 
   */
  onChange?: (date: Dayjs) => void
}

function Calendar(props: CalendarProps) {

  const {
    value,
    style,
    className,
    locale,
    onChange
  } = props

  const [curValue, setCurValue] = useState<Dayjs>(value)
  const [curMonth, setCurMonth] = useState<Dayjs>(value)

  function selectHandler(date: Dayjs) {
    setCurValue(date)
    setCurMonth(date)
    onChange?.(date)
  }

  function preMonthHandler() {
    setCurMonth(curMonth.subtract(1, 'month'))
  }

  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, 'month'))
  }

  function todayHandler() {
    const date = dayjs(Date.now());

    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  const classNames = cs("calendar", className)

  return <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
    <div className={classNames} style={style}>
      <Header curMonth={curMonth} prevMonthHandler={preMonthHandler} nextMonthHandler={nextMonthHandler} todayHandler={todayHandler}></Header>
      <MonthCalendar {...props} value={curValue} curMonth={curMonth} selectHandler={selectHandler} />
    </div>
  </LocaleContext.Provider>
}

export default Calendar;
