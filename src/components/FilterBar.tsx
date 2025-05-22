import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

// Define types for the filter props
type PriceRange = {
  id: string;
  label: string;
  min: number;
  max: number;
};

type Color = {
  id: string;
  name: string;
};

type Sport = {
  id: number;
  name: string;
};

type FilterBarProps = {
  selectedSport: string;
  setSelectedSport: (sport: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedPriceRanges: string[];
  setSelectedPriceRanges: (ranges: string[]) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  resetFilters: () => void;
  sports: Sport[];
  priceRanges: PriceRange[];
  colors: Color[];
};

export const FilterBar = ({
  selectedSport,
  setSelectedSport,
  priceRange,
  setPriceRange,
  selectedPriceRanges,
  setSelectedPriceRanges,
  selectedColors,
  setSelectedColors,
  sortOption,
  setSortOption,
  resetFilters,
  sports,
  priceRanges,
  colors,
}: FilterBarProps) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handlePriceRangeToggle = (rangeId: string) => {
    setSelectedPriceRanges(
      selectedPriceRanges.includes(rangeId)
        ? selectedPriceRanges.filter((id) => id !== rangeId)
        : [...selectedPriceRanges, rangeId]
    );
  };

  const handleColorToggle = (colorId: string) => {
    setSelectedColors(
      selectedColors.includes(colorId)
        ? selectedColors.filter((id) => id !== colorId)
        : [...selectedColors, colorId]
    );
  };

  // Filter sidebar for desktop
  const FilterSidebar = () => (
    <div className="w-64 pr-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-lg">Filters</h2>
        <button
          onClick={resetFilters}
          className="text-sm text-primary hover:underline"
        >
          Reset All
        </button>
      </div>

      <Separator />

      <div>
        <Accordion type="multiple" defaultValue={["category", "price", "color"]}>
          <AccordionItem value="category">
            <AccordionTrigger className="text-base font-medium">Sport</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                <div className="flex items-center">
                  <Checkbox
                    id="all-sports"
                    checked={selectedSport === "All"}
                    onCheckedChange={() => setSelectedSport("All")}
                  />
                  <label
                    htmlFor="all-sports"
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    All Sports
                  </label>
                </div>

                {sports.map((sport) => (
                  <div key={sport.id} className="flex items-center">
                    <Checkbox
                      id={`sport-${sport.id}`}
                      checked={selectedSport === sport.name}
                      onCheckedChange={() => setSelectedSport(sport.name)}
                    />
                    <label
                      htmlFor={`sport-${sport.id}`}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {sport.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger className="text-base font-medium">Price</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex items-center">
                      <Checkbox
                        id={range.id}
                        checked={selectedPriceRanges.includes(range.id)}
                        onCheckedChange={() => handlePriceRangeToggle(range.id)}
                      />
                      <label
                        htmlFor={range.id}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="pt-2 px-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                  <Slider
                    defaultValue={[0, 3000]}
                    value={priceRange}
                    max={3000}
                    step={10}
                    onValueChange={(value) => setPriceRange(value)}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="color">
            <AccordionTrigger className="text-base font-medium">Color</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {colors.map((color) => (
                  <div key={color.id} className="flex items-center">
                    <Checkbox
                      id={color.id}
                      checked={selectedColors.includes(color.id)}
                      onCheckedChange={() => handleColorToggle(color.id)}
                    />
                    <label
                      htmlFor={color.id}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {color.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );

  return (
    <div className="mb-8">
      {/* Mobile filter dialog */}
      <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-medium">All Products</h1>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="md:hidden flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
          </div>
        </div>

        <SheetContent side="left" className="w-80 p-0">
          <div className="flex items-center justify-between p-4 border-b">
            <SheetTitle className="text-lg font-medium">Filters</SheetTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="text-primary"
              >
                Reset All
              </Button>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetTrigger>
            </div>
          </div>
          <div className="p-4 overflow-y-auto h-[calc(100vh-120px)]">
            <FilterSidebar />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop filter */}
      <div className="hidden md:flex justify-between items-start">
        <div className="w-1/4 sticky top-24">
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
};
