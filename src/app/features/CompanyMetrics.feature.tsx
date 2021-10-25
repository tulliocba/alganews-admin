import {Area, AreaConfig} from "@ant-design/charts";
import {MetricService} from "cms-alganews-sdk";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";
import {useEffect, useState} from "react";
import {transformDataIntoAntdChart} from "../../core/utils/transformDataIntoAntdChart";

export const CompanyMetrics = () => {
    const [data, setData] = useState<{
        yearMonth: string;
        value: number;
        category: "totalRevenues" | "totalExpenses";
    }[]>([]);

    useEffect(() => {
        MetricService.getMonthlyRevenuesExpenses()
            .then(transformDataIntoAntdChart)
            .then(setData);
    }, []);

    const config: AreaConfig = {
        data,
        height: 400,
        color: ["#0099ff", "#274060"],
        areaStyle: {
            fillOpacity: 1,
        },
        xField: "yearMonth",
        yField: "value",
        seriesField: "category",
        legend: {
            itemName: {
                formatter(legend) {
                    return legend === "totalRevenues" ? "Receitas" : "Despesas";
                },
            },
        },
        tooltip: {
            title(title) {
                return format(new Date(title), "MMMM yyyy", {
                    locale: ptBR,
                });
            },
            formatter(item) {
                return {
                    name: item.category === "totalRevenues" ? "Receitas" : "Despesas",
                    value: (item.value as number).toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: 'currency',
                        maximumFractionDigits: 2
                    }),
                };
            },
        },
        xAxis: {
            label: {
                formatter(item) {
                    return format(new Date(item), "MM/yyyy");
                },
            },
        },
        point: {
            size: 5,
            shape: "cicle",
        },
    };
    return <Area {...config} />;
};
