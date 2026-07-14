const settings = {
  "minecraft_version": "auto",
  "host": "aifriend.aternos.me",
  "port": 32782,
  "auth": "offline",

  "mindserver_port": 8080,
  "auto_open_ui": true,

  "base_profile": "assistant", 
  "profiles": [
    "./profiles/llama.json"
  ],

  "load_memory": false,
  "init_message": "Respond with hello world and your name",
  "only_chat_with": [],
  "speak": false,
  "chat_ingame": true,
  "language": "en",
  "render_bot_view": false,
  "allow_insecure_coding": false,
  "allow_vision": false,
  "blocked_actions": ["checkBlueprint", "checkBlueprintLevel", "getBlueprint", "getBlueprintLevel"],
  "code_timeout_mins": -1,
  "relevant_docs_count": 1,
  "max_messages": 6,
  "num_examples": 1,
  "max_commands": -1,
  "show_command_syntax": "full",
  "narrate_behavior": true,
  "chat_bot_messages": true,
  "spawn_timeout": 30,
  "block_place_delay": 0,
  "log_all_prompts": false
};

export default settings;
