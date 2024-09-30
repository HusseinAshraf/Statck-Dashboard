import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const data = [
  {
    id: "japan",
    color: "hsl(235, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 119,
      },
      {
        x: "helicopter",
        y: 103,
      },
      {
        x: "boat",
        y: 298,
      },
      {
        x: "train",
        y: 155,
      },
      {
        x: "subway",
        y: 89,
      },
      {
        x: "bus",
        y: 225,
      },
      {
        x: "car",
        y: 157,
      },
      {
        x: "moto",
        y: 156,
      },
      {
        x: "bicycle",
        y: 94,
      },
      {
        x: "horse",
        y: 193,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 210,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(24, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 213,
      },
      {
        x: "helicopter",
        y: 240,
      },
      {
        x: "boat",
        y: 170,
      },
      {
        x: "train",
        y: 30,
      },
      {
        x: "subway",
        y: 253,
      },
      {
        x: "bus",
        y: 231,
      },
      {
        x: "car",
        y: 199,
      },
      {
        x: "moto",
        y: 130,
      },
      {
        x: "bicycle",
        y: 93,
      },
      {
        x: "horse",
        y: 142,
      },
      {
        x: "skateboard",
        y: 14,
      },
      {
        x: "others",
        y: 268,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(69, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 171,
      },
      {
        x: "helicopter",
        y: 152,
      },
      {
        x: "boat",
        y: 298,
      },
      {
        x: "train",
        y: 290,
      },
      {
        x: "subway",
        y: 94,
      },
      {
        x: "bus",
        y: 204,
      },
      {
        x: "car",
        y: 243,
      },
      {
        x: "moto",
        y: 113,
      },
      {
        x: "bicycle",
        y: 16,
      },
      {
        x: "horse",
        y: 260,
      },
      {
        x: "skateboard",
        y: 259,
      },
      {
        x: "others",
        y: 58,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(55, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 207,
      },
      {
        x: "helicopter",
        y: 200,
      },
      {
        x: "boat",
        y: 258,
      },
      {
        x: "train",
        y: 85,
      },
      {
        x: "subway",
        y: 72,
      },
      {
        x: "bus",
        y: 83,
      },
      {
        x: "car",
        y: 280,
      },
      {
        x: "moto",
        y: 262,
      },
      {
        x: "bicycle",
        y: 298,
      },
      {
        x: "horse",
        y: 188,
      },
      {
        x: "skateboard",
        y: 21,
      },
      {
        x: "others",
        y: 125,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(12, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 74,
      },
      {
        x: "helicopter",
        y: 154,
      },
      {
        x: "boat",
        y: 255,
      },
      {
        x: "train",
        y: 270,
      },
      {
        x: "subway",
        y: 25,
      },
      {
        x: "bus",
        y: 109,
      },
      {
        x: "car",
        y: 217,
      },
      {
        x: "moto",
        y: 259,
      },
      {
        x: "bicycle",
        y: 142,
      },
      {
        x: "horse",
        y: 175,
      },
      {
        x: "skateboard",
        y: 166,
      },
      {
        x: "others",
        y: 94,
      },
    ],
  },
];

const Line = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
    
      <ResponsiveLine
        data={data}
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "transportation",
          legendOffset: 40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "count",
          legendOffset: -45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
