"use strict";
/**
 * Hackathon @ J On The Beach 2017
 * Config file (temporary)
 *
 * Config should be better written (really?) in JSON files, which are parsed and joined.
 *   While we are experimenting, we will use this JS config file which is easier
 *   to load and modify.
 * @license MIT
 * @author Álvaro Santamaría Herrero <asantamaria@itrsgroup.com>
 * @author (Each contributor appends a line here)
 */

///////////////////////////////////////////////////////////////////////////////
// Clients' config
///////////////////////////////////////////////////////////////////////////////
const valoClientConfigs = {
    valo1 : {
        host : 'localhost',
        port : 8888
    }
};

const twitterClientConfigs = {
    twitter1 : {
        // This config assumes the app's keys are in env variables
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    }
};

///////////////////////////////////////////////////////////////////////////////
// VALO schemas
// (We write the schemas as in JSON for convenience
///////////////////////////////////////////////////////////////////////////////
const valoSchemas = {
    tweetFull :
    {
      "version":"1.0",
      "topDef":{
         "type":"record",
         "properties":{
            "contributor" : {
              "type" : "contributor",
              "definition" : "twitter_app"
            },
            "tweet" :{
               "type":"record",
               "properties":{

                  "id_str":{
                     "type":"string"
                  },
                  "retweeted":{
                     "type":"boolean"
                  },
                  "lang":{
                     "type":"string"
                  },
                  "truncated":{
                     "type":"boolean"
                  },
                  "quoted_status_id_str":{
                     "type":"string"
                  },
                  "in_reply_to_status_id":{
                     "type":"long"
                  },
                  "user":{
                     "type":"record",
                     "properties":{
                        "listed_count":{
                           "type":"int"
                        },
                        "id_str":{
                           "type":"string"
                        },
                        "profile_link_color":{
                           "type":"string"
                        },
                        "profile_sidebar_border_color":{
                           "type":"string"
                        },
                        "lang":{
                           "type":"string"
                        },
                        "follow_request_sent":{
                           "type":"boolean"
                        },
                        "profile_text_color":{
                           "type":"string"
                        },
                        "url":{
                           "type":"string"
                        },
                        "profile_background_tile":{
                           "type":"boolean"
                        },
                        "contributors_enabled":{
                           "type":"boolean"
                        },
                        "favourites_count":{
                           "type":"int"
                        },
                        "friends_count":{
                           "type":"int"
                        },
                        "profile_image_url_https":{
                           "type":"string"
                        },
                        "profile_background_color":{
                           "type":"string"
                        },
                        "id":{
                           "type":"long"
                        },
                        "withheld_in_countries":{
                           "type":"string"
                        },
                        "is_translator":{
                           "type":"boolean"
                        },
                        "profile_background_image_url_https":{
                           "type":"string"
                        },
                        "protected":{
                           "type":"boolean"
                        },
                        "utc_offset":{
                           "type":"int"
                        },
                        "name":{
                           "type":"string"
                        },
                        "withheld_scope":{
                           "type":"string"
                        },
                        "verified":{
                           "type":"boolean"
                        },
                        "time_zone":{
                           "type":"string"
                        },
                        "location":{
                           "type":"string"
                        },
                        "profile_image_url":{
                           "type":"string"
                        },
                        "default_profile_image":{
                           "type":"boolean"
                        },
                        "profile_background_image_url":{
                           "type":"string"
                        },
                        "profile_banner_url":{
                           "type":"string"
                        },
                        "statuses_count":{
                           "type":"int"
                        },
                        "show_all_inline_media":{
                           "type":"boolean"
                        },
                        "created_at":{
                           "type":"datetime"
                        },
                        "geo_enabled":{
                           "type":"boolean"
                        },
                        "followers_count":{
                           "type":"int"
                        },
                        "profile_sidebar_fill_color":{
                           "type":"string"
                        },
                        "profile_use_background_image":{
                           "type":"boolean"
                        },
                        "default_profile":{
                           "type":"boolean"
                        },
                        "screen_name":{
                           "type":"string"
                        },
                        "description":{
                           "type":"string"
                        },
                        "entities":{
                           "type":"record",
                           "properties":{
                              "hashtags":{
                                 "type":"sequence",
                                 "underlying":{
                                    "type":"record",
                                    "properties":{
                                       "text":{
                                          "type":"string"
                                       },
                                       "indices":{
                                          "type":"sequence",
                                          "underlying":{
                                             "type":"byte"
                                          }
                                       }
                                    }
                                 }
                              },
                              "media":{
                                 "type":"record",
                                 "properties":{
                                    "id_str":{
                                       "type":"string"
                                    },
                                    "url":{
                                       "type":"string"
                                    },
                                    "media_url":{
                                       "type":"string"
                                    },
                                    "expanded_url":{
                                       "type":"string"
                                    },
                                    "source_status_id_str":{
                                       "type":"string"
                                    },
                                    "source_status_id":{
                                       "type":"long"
                                    },
                                    "media_url_https":{
                                       "type":"string"
                                    },
                                    "id":{
                                       "type":"long"
                                    },
                                    "display_url":{
                                       "type":"string"
                                    },
                                    "type":{
                                       "type":"string"
                                    },
                                    "sizes":{
                                       "type":"record",
                                       "properties":{
                                          "thumb":{
                                             "type":"record",
                                             "properties":{
                                                "h":{
                                                   "type":"short"
                                                },
                                                "resize":{
                                                   "type":"string"
                                                },
                                                "w":{
                                                   "type":"short"
                                                }
                                             }
                                          },
                                          "large":{
                                             "type":"record",
                                             "properties":{
                                                "h":{
                                                   "type":"short"
                                                },
                                                "resize":{
                                                   "type":"string"
                                                },
                                                "w":{
                                                   "type":"short"
                                                }
                                             }
                                          },
                                          "medium":{
                                             "type":"record",
                                             "properties":{
                                                "h":{
                                                   "type":"short"
                                                },
                                                "resize":{
                                                   "type":"string"
                                                },
                                                "w":{
                                                   "type":"short"
                                                }
                                             }
                                          },
                                          "small":{
                                             "type":"record",
                                             "properties":{
                                                "h":{
                                                   "type":"short"
                                                },
                                                "resize":{
                                                   "type":"string"
                                                },
                                                "w":{
                                                   "type":"short"
                                                }
                                             }
                                          }
                                       }
                                    },
                                    "indices":{
                                       "type":"sequence",
                                       "underlying":{
                                          "type":"long"
                                       }
                                    }
                                 }
                              },
                              "urls":{
                                 "type":"sequence",
                                 "underlying":{
                                    "type":"record",
                                    "properties":{
                                       "display_url":{
                                          "type":"string"
                                       },
                                       "expanded_url":{
                                          "type":"string"
                                       },
                                       "indices":{
                                          "type":"sequence",
                                          "underlying":{
                                             "type":"byte"
                                          }
                                       },
                                       "url":{
                                          "type":"string"
                                       }
                                    }
                                 }
                              },
                              "user_mentions":{
                                 "type":"sequence",
                                 "underlying":{
                                    "type":"record",
                                    "properties":{
                                       "id":{
                                          "type":"long"
                                       },
                                       "id_str":{
                                          "type":"string"
                                       },
                                       "indices":{
                                          "type":"sequence",
                                          "underlying":{
                                             "type":"byte"
                                          }
                                       },
                                       "name":{
                                          "type":"string"
                                       },
                                       "screen_name":{
                                          "type":"string"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     }
                  },
                  "favorited":{
                     "type":"boolean"
                  },
                  "id":{
                     "type":"long"
                  },
                  "withheld_in_countries":{
                     "type":"sequence",
                     "underlying":{
                        "type":"string"
                     }
                  },
                  "in_reply_to_screen_name":{
                     "type":"string"
                  },
                  "coordinates":{
                     "type":"record",
                     "properties":{
                        "coordinates":{
                           "type":"sequence",
                           "underlying":{
                              "type":"double"
                           }
                        },
                        "type":{
                           "type":"string"
                        }
                     }
                  },
                  "favorite_count":{
                     "type":"int"
                  },
                  "withheld_scope":{
                     "type":"string"
                  },
                  "current_user_retweet":{
                     "type":"record",
                     "properties":{
                        "id":{
                           "type":"long"
                        },
                        "id_str":{
                           "type":"string"
                        }
                     }
                  },
                  "text":{
                     "type":"string"
                  },
                  "in_reply_to_user_id":{
                     "type":"long"
                  },
                  "quoted_status_id":{
                     "type":"long"
                  },
                  "in_reply_to_user_id_str":{
                     "type":"string"
                  },
                  "source":{
                     "type":"string"
                  },
                  "filter_level":{
                     "type":"string"
                  },
                  "created_at":{
                     "type":"datetime",
                     "annotations":["urn:itrs:default-timestamp"]
                  },
                  "in_reply_to_status_id_str":{
                     "type":"string"
                  },
                  "possibly_sensitive":{
                     "type":"boolean"
                  },
                  "timestamp_ms":{
                     "type":"string"
                  },
                  "withheld_copyright":{
                     "type":"boolean"
                  },
                  "retweet_count":{
                     "type":"int"
                  },
                  "entities":{
                     "type":"record",
                     "properties":{
                        "hashtags":{
                           "type":"sequence",
                           "underlying":{
                              "type":"record",
                              "properties":{
                                 "text":{
                                    "type":"string"
                                 },
                                 "indices":{
                                    "type":"sequence",
                                    "underlying":{
                                       "type":"byte"
                                    }
                                 }
                              }
                           }
                        },
                        "media":{
                           "type":"record",
                           "properties":{
                              "id_str":{
                                 "type":"string"
                              },
                              "url":{
                                 "type":"string"
                              },
                              "media_url":{
                                 "type":"string"
                              },
                              "expanded_url":{
                                 "type":"string"
                              },
                              "source_status_id_str":{
                                 "type":"string"
                              },
                              "source_status_id":{
                                 "type":"long"
                              },
                              "media_url_https":{
                                 "type":"string"
                              },
                              "id":{
                                 "type":"long"
                              },
                              "display_url":{
                                 "type":"string"
                              },
                              "type":{
                                 "type":"string"
                              },
                              "sizes":{
                                 "type":"record",
                                 "properties":{
                                    "thumb":{
                                       "type":"record",
                                       "properties":{
                                          "h":{
                                             "type":"short"
                                          },
                                          "resize":{
                                             "type":"string"
                                          },
                                          "w":{
                                             "type":"short"
                                          }
                                       }
                                    },
                                    "large":{
                                       "type":"record",
                                       "properties":{
                                          "h":{
                                             "type":"short"
                                          },
                                          "resize":{
                                             "type":"string"
                                          },
                                          "w":{
                                             "type":"short"
                                          }
                                       }
                                    },
                                    "medium":{
                                       "type":"record",
                                       "properties":{
                                          "h":{
                                             "type":"short"
                                          },
                                          "resize":{
                                             "type":"string"
                                          },
                                          "w":{
                                             "type":"short"
                                          }
                                       }
                                    },
                                    "small":{
                                       "type":"record",
                                       "properties":{
                                          "h":{
                                             "type":"short"
                                          },
                                          "resize":{
                                             "type":"string"
                                          },
                                          "w":{
                                             "type":"short"
                                          }
                                       }
                                    }
                                 }
                              },
                              "indices":{
                                 "type":"sequence",
                                 "underlying":{
                                    "type":"long"
                                 }
                              }
                           }
                        },
                        "urls":{
                           "type":"sequence",
                           "underlying":{
                              "type":"record",
                              "properties":{
                                 "display_url":{
                                    "type":"string"
                                 },
                                 "expanded_url":{
                                    "type":"string"
                                 },
                                 "indices":{
                                    "type":"sequence",
                                    "underlying":{
                                       "type":"byte"
                                    }
                                 },
                                 "url":{
                                    "type":"string"
                                 }
                              }
                           }
                        },
                        "user_mentions":{
                           "type":"sequence",
                           "underlying":{
                              "type":"record",
                              "properties":{
                                 "id":{
                                    "type":"long"
                                 },
                                 "id_str":{
                                    "type":"string"
                                 },
                                 "indices":{
                                    "type":"sequence",
                                    "underlying":{
                                       "type":"byte"
                                    }
                                 },
                                 "name":{
                                    "type":"string"
                                 },
                                 "screen_name":{
                                    "type":"string"
                                 }
                              }
                           }
                        }
                     }
                  }

               }
            }
         }
      }
    },
    tweetLite :
    {
      "version":"1.0",
      "topDef":{
         "type":"record",
         "properties":{
            "contributor" : {
              "type" : "contributor",
              "definition" : "twitter_app"
            },
            "tweet" :{
               "type":"record",
               "properties":{
                  "id_str":{
                     "type":"string"
                  },
                  "retweeted":{
                     "type":"boolean"
                  },
                  "lang":{
                     "type":"string"
                  },
                  "user":{
                     "type":"record",
                     "properties":{
                        "listed_count":{
                           "type":"int"
                        },
                        "id_str":{
                           "type":"string"
                        },
                        "lang":{
                           "type":"string"
                        },
                        "url":{
                           "type":"string"
                        },
                        "favourites_count":{
                           "type":"int"
                        },
                        "friends_count":{
                           "type":"int"
                        },
                        "profile_image_url_https":{
                           "type":"string"
                        },
                        "id":{
                           "type":"long"
                        },
                        "utc_offset":{
                           "type":"int"
                        },
                        "name":{
                           "type":"string"
                        },
                        "time_zone":{
                           "type":"string"
                        },
                        "location":{
                           "type":"string"
                        },
                        "profile_image_url":{
                           "type":"string"
                        },
                        "default_profile_image":{
                           "type":"boolean"
                        },
                        "statuses_count":{
                           "type":"int"
                        },
                        "created_at":{
                           "type":"datetime"
                        },
                        "geo_enabled":{
                           "type":"boolean"
                        },
                        "followers_count":{
                           "type":"int"
                        },
                        "default_profile":{
                           "type":"boolean"
                        },
                        "screen_name":{
                           "type":"string"
                        },
                        "description":{
                           "type":"string"
                        }
                     }
                  },
                  "favorited":{
                     "type":"boolean"
                  },
                  "id":{
                     "type":"long"
                  },
                  "in_reply_to_screen_name":{
                     "type":"string"
                  },
                  "coordinates":{
                     "type":"record",
                     "properties":{
                        "coordinates":{
                           "type":"sequence",
                           "underlying":{
                              "type":"double"
                           }
                        },
                        "type":{
                           "type":"string"
                        }
                     }
                  },
                  "favorite_count":{
                     "type":"int"
                  },
                  "text":{
                     "type":"string"
                  },
                  "in_reply_to_user_id":{
                     "type":"long"
                  },
                  "in_reply_to_user_id_str":{
                     "type":"string"
                  },
                  "source":{
                     "type":"string"
                  },
                  "created_at":{
                     "type":"datetime",
                     "annotations":["urn:itrs:default-timestamp"]
                  },
                  "in_reply_to_status_id_str":{
                     "type":"string"
                  },
                  "timestamp_ms":{
                     "type":"string"
                  },
                  "withheld_copyright":{
                     "type":"boolean"
                  },
                  "retweet_count":{
                     "type":"int"
                  }
               }
            }
         }
      }
   }
};

///////////////////////////////////////////////////////////////////////////////
// Map sources to valo streams
///////////////////////////////////////////////////////////////////////////////

const mappings = [
    {
        "twitterClientConfig" : twitterClientConfigs.twitter1,
        "twitterTrack" : "@jotbhelp",
        "twitterFollow" : "88888888888888888", //TODO: use a valid twitter ID to follow the right account
        "destinationType" : "valo",
        "valoClient" : valoClientConfigs.valo1,
        "valoTenant" : "demo",
        "valoCollection" : "twitter",
        "valoStream" : "tweets",
        "valoSchema" : valoSchemas.tweetLite,
        "valoRepo" : "ssr", // "tsr"|"ssr"|null
        "valoContributorId" : "twitter-app-00001"
    }
];

///////////////////////////////////////////////////////////////////////////////
// Config object
///////////////////////////////////////////////////////////////////////////////

const config = {

    mappings
};

export default config;
