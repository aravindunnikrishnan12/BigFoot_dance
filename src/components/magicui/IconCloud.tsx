//magiui/iconCLoud


import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes"; // For handling themes (light/dark)
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"; // Importing necessary functions from react-icon-cloud

export const cloudProps: any = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Function for rendering custom icons, adjusting based on theme
export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[]; // The list of icon slugs to display in the cloud
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null); // State to hold the fetched icon data
  const { theme } = useTheme(); // Using the theme context to detect the current theme (light or dark)

  // Fetch the icons when the component is mounted or when iconSlugs change
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  // Memoize the rendered icons to avoid re-rendering unnecessarily
  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  return (
    // Cloud component that wraps the icons in a 3D "cloud" container
    <Cloud {...cloudProps}>
      <>{renderedIcons}</> {/* Render the icons */}
    </Cloud>
  );
}
