import { books, days } from "../../../data";
import { Icon } from "../../common";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const ScheduleSection = () => {
  return (
    <section>
      <ComuSectionHeader title={"일정"} />
      <div className="p-2">
        <div className="flex flex-col">
          {books.map((b, i) => {
            const [_, month, date] = b.schedule.split("-");
            const day = new Date(b.schedule).getDay();

            return (
              <div key={b.id} className="flex items-stretch ">
                <div className="relative flex justify-center items-center">
                  {i !== 0 && (
                    <div
                      className={`w-1 bg-gray-400 inline-block absolute -z-10 top-0  h-[50%]`}
                    />
                  )}
                  <span className="flex">
                    <Icon name="checkCircleFill" className="p-4" />
                  </span>
                  {i !== books.length - 1 && (
                    <div
                      className={`w-1 bg-gray-400 inline-block absolute -z-10 bottom-0 h-[50%]`}
                    />
                  )}
                </div>
                <div className="flex-1 flex p-4 items-center gap-4 rounded-xl shadow-xl mb-4">
                  <div>
                    <p className="font-bold text-lg">{`${month}월 모임`}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex justify-center items-center text-gray-300">
                      <Icon name="calendarFill" />
                    </span>
                    <p>{`${month}/${date}(${days[day]})`}</p>
                    <p>10:00 - 13:00</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
