import "./cards.css";
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  colorScheme?: any;
  alternativeValues?: Array<{
    label: string;
    value: string | number;
    change?: {
      value: number;
      isPositive: boolean;
    };
  }>;
}

export function MetricsCard({
  title,
  value,
  change,
  colorScheme,
  alternativeValues = [],
}: MetricsCardProps) {
  return (
    <div
      className={`metrics-card `}
      style={{
        backgroundColor: colorScheme,
        color: "#0f172a",
      }}
    >
      <div className="metrics-card__title">{title}</div>

      <div className="metrics-card__content">
        <div className="metrics-card__value-container">
          <div
            className={`metrics-card__value ${
              alternativeValues.length > 0
                ? "metrics-card__value--interactive"
                : ""
            }`}
          >
            {typeof value === "number" ? value.toLocaleString() : value}

            {alternativeValues.length > 0 && (
              <div className="metrics-card__hover-bar" />
            )}
          </div>

          {alternativeValues.length > 0 && (
            <div className="metrics-card__dropdown">
              {alternativeValues.map((item, index) => (
                <div key={index} className="metrics-card__dropdown-item">
                  <div>
                    <div className="metrics-card__dropdown-value">
                      {typeof item.value === "number"
                        ? item.value.toLocaleString()
                        : item.value}
                    </div>
                    <div className="metrics-card__dropdown-label">
                      {item.label}
                    </div>
                  </div>
                  {item.change && (
                    <div
                      className={`metrics-card__dropdown-change ${
                        item.change.isPositive
                          ? "metrics-card__dropdown-change--positive"
                          : "metrics-card__dropdown-change--negative"
                      }`}
                    >
                      {item.change.isPositive ? "+" : ""}
                      {item.change.value}%
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {change && (
          <div
            className={`metrics-card__change ${
              change.isPositive
                ? "metrics-card__change--positive"
                : "metrics-card__change--negative"
            }`}
          >
            <span className="metrics-card__change-text">
              {change.isPositive ? "+" : ""}
              {change.value}%
            </span>
            {!change.isPositive ? (
              <IconTrendingUp stroke={2} />
            ) : (
              <IconTrendingDown stroke={2} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
