#include "M5Unified.h"

extern "C" void app_main(void)
{
    auto cfg = M5.config();

    M5.begin(cfg);

    M5.Display.clear();

    M5.Display.setRotation(1);

    M5.Display.setTextSize(2);

    M5.Display.setCursor(20, 40);

    M5.Display.println("LLM IoT Thin Edge");

    M5.Display.println("");

    M5.Display.println("Phase 04");

    M5.Display.println("Display Runtime");
}