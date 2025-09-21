import RevenueCard from "./components/graphs/location/revenue-card";
import TotalSalesCard from "./components/graphs/sales/total-sales";
import { MetricsCard } from "./components/kpi-cards";
import { kpi_datas } from "./components/kpi-cards/data";
import ChartCard from "./components/graphs/projection/projection";
import RevenueChartCard from "./components/graphs/revenue/revenue";
import TopSellingProducts from "./components/table/top-sellingtable";
import Layout from "./layout";
import RightSidebar from "./components/right-section-home";

function Dashboard() {
  return (
    <div className="app-container">
      <Layout>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 flex-1">
            {kpi_datas.map((kpi) => (
              <MetricsCard
                key={kpi.title}
                title={kpi.title}
                value={kpi.value}
                change={kpi.change}
                colorScheme={kpi.colorScheme}
                alternativeValues={kpi.alternativeValues}
              />
            ))}
          </div>
          <div className="flex-1">
            <ChartCard />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6">
          <RevenueChartCard />
          <RevenueCard />
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6">
          <TopSellingProducts />
          <TotalSalesCard />
        </div>
      </Layout>
      <RightSidebar />
    </div>
  );
}

export default Dashboard;
