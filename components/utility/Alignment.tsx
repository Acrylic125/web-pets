export interface AlignmentProps {
  children?: JSX.Element;
  className?: string;
}

const COL_CLASSES = "flex flex-col";
const ROW_CLASSES = "flex flex-row";

export function Column({ children, className }: AlignmentProps) {
  return (
    <div className={className ? COL_CLASSES + className : COL_CLASSES}>
      {children}
    </div>
  );
}

export function Row({ children, className }: AlignmentProps) {
  return (
    <div className={className ? ROW_CLASSES + className : ROW_CLASSES}>
      {children}
    </div>
  );
}
