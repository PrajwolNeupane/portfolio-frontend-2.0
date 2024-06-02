import { ActivitySlider, FadeUp } from "@/components/shared";
import { activity } from "@/enums/constant.enum";

export default function ActivitySection() {
  return (
    <div
      className="flex flex-col w-full items-center justify-center gap-4"
      id="activity-section"
    >
      <FadeUp id="activity-title" duration={0.75} dealy={0.5}>
        <h2 className="text-4xl font-medium text-gray-300" id="activity-title">
          ACTIVITY
        </h2>
      </FadeUp>
      <FadeUp id="contact-tag" duration={0.75} dealy={0.5}>
        <h4 className="text-sm text-main-lighter" id="contact-tag">
          Activities Involved
        </h4>
      </FadeUp>
      <ActivitySlider activity={activity} />
    </div>
  );
}
