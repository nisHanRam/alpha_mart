import DashboardNav from "../ui/dashboard/DashboardNav";

const DashboardLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <DashboardNav />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
