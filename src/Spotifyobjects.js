export const SpotifyObjects  = {
      // Playlist object
      // https://developer.spotify.com/documentation/web-api/reference/#object-playlistobject
      playlist: {
         href: "https://api.spotify.com/v1/me/shows?offset=0&limit=20",
         limit: 20,
         next: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
         offset: 0,
         previous: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
         total: 0,
         items: [
           {
             collaborative: false,
             description: "string",
             external_urls: {
               spotify: "string"
             },
             href: "string",
             id: "string",
             images: [
               {
                 url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                 height: 300,
                 width: 300
               }
             ],
             name: "string",
             owner: {
               external_urls: {
                 spotify: "string"
               },
               followers: {
                 href: "string",
                 total: 0
               },
               href: "string",
               id: "string",
               type: "user",
               uri: "string",
               display_name: "string"
             },
             public: false,
             snapshot_id: "string",
             tracks: {
               href: "string",
               total: 0
             },
             type: "string",
             uri: "string"
           }
         ]
       },
      //PlayList Track object
      //https://developer.spotify.com/documentation/web-api/reference/get-playlists-tracks
      playlistTrack: 
      {
         href: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
         limit: 20,
         next: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
         offset: 0,
         previous: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
         total: 0,
         items: [
           {
             added_at: "string",
             added_by: {
               external_urls: {
                 spotify: "string"
               },
               followers: {
                 href: "string",
                 total: 0
               },
               href: "string",
               id: "string",
               type: "user",
               uri: "string"
             },
             is_local: false,
             track: {
               album: {
                 album_type: "compilation",
                 total_tracks: 9,
                 available_markets: [
                   "CA",
                   "BR",
                   "IT"
                 ],
                 external_urls: {
                   spotify: "string"
                 },
                 href: "string",
                 id: "2up3OPMp9Tb4dAKM2erWXQ",
                 images: [
                   {
                     url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                     height: 300,
                     width: 300
                   }
                 ],
                 name: "string",
                 release_date: "1981-12",
                 release_date_precision: "year",
                 restrictions: {
                   reason: "market"
                 },
                 type: "album",
                 uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
                 artists: [
                   {
                     external_urls: {
                       spotify: "string"
                     },
                     href: "string",
                     id: "string",
                     name: "string",
                     type: "artist",
                     uri: "string"
                   }
                 ]
               },
               artists: [
                 {
                   external_urls: {
                     spotify: "string"
                   },
                   followers: {
                     href: "string",
                     total: 0
                   },
                   genres: [
                     "Prog rock",
                     "Grunge"
                   ],
                   href: "string",
                   id: "string",
                   images: [
                     {
                       url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                       height: 300,
                       width: 300
                     }
                   ],
                   name: "string",
                   popularity: 0,
                   type: "artist",
                   uri: "string"
                 }
               ],
               available_markets: [
                 "string"
               ],
               disc_number: 0,
               duration_ms: 0,
               explicit: false,
               external_ids: {
                 isrc: "string",
                 ean: "string",
                 upc: "string"
               },
               external_urls: {
                 spotify: "string"
               },
               href: "string",
               id: "string",
               is_playable: false,
               linked_from: {},
               restrictions: {
                 reason: "string"
               },
               name: "string",
               popularity: 0,
               preview_url: "string",
               track_number: 0,
               type: "track",
               uri: "string",
               is_local: false
             }
           }
         ]
       },
      // Track object
      // https://developer.spotify.com/documentation/web-api/reference/#object-trackobject
      track: {
        album: {
          album_type: "",
          artists: [
            {
              external_urls: {
                spotify: "",
              },
              href: "",
              id: "",
              name: "",
              type: "",
              uri: "",
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: "",
          },
          href: "",
          id: "",
          images: [],
          name: "",
          release_date: "",
          release_date_precision: "",
          total_tracks: 0,
          type: "",
          uri: "",
        },
        artists: [
          {
            external_urls: {
              spotify: "",
            },
            href: "",
            id: "",
            name: "",
            type: "",
            uri: "",
          },
        ],
        available_markets: [],
        disc_number: 0,
        duration_ms: 0,
        explicit: false,
        external_ids: {
          isrc: "",
        },
        external_urls: {
          spotify: "",
        },
        href: "",
        id: "",
        is_local: false,
        name: "",
        popularity: 0,
        preview_url: "",
        track_number: 0,
        type: "",
        uri: "",
      },
      // User object
      // https://developer.spotify.com/documentation/web-api/reference/#object-privateuserobject
      user: {
         country: "string",
         display_name: "string",
         email: "string",
         explicit_content: {
           filter_enabled: false,
           filter_locked: false
         },
         external_urls: {
           spotify: "string"
         },
         followers: {
           href: "string",
           total: 0
         },
         href: "string",
         id: "string",
         images: [
           {
             url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
             height: 300,
             width: 300
           }
         ],
         product: "string",
         type: "string",
         uri: "string"
      },      
       searchResult:
       {
        tracks: {
          href: "",
          items: [
            {
              album: {
                album_type: "album",
                artists: [
                  {
                    external_urls: {
                      spotify: ""
                    },
                    href: "",
                    id: "",
                    name: "",
                    type: "",
                    uri: ""
                  }
                ],
                available_markets: [                 
                  "XK"
                ],
                external_urls: {
                  spotify: ""
                },
                href: "",
                id: "",
                images: [
                  {
                    height: 640,
                    url: "",
                    width: 640
                  },
                  {
                    height: 300,
                    url: "",
                    width: 300
                  },
                  {
                    height: 64,
                    url: "",
                    width: 64
                  }
                ],
                name: "",
                release_date: "",
                release_date_precision: "",
                total_tracks: 0,
                type: "",
                uri: ""
              },
              artists: [
                {
                  external_urls: {
                    spotify: ""
                  },
                  href: "",
                  id: "",
                  name: "",
                  type: "",
                  uri: ""
                }
              ],
              available_markets: [
               
              ],
              disc_number: 1,
              duration_ms: 0,
              explicit: 0,
              external_ids: {
                isrc: ""
              },
              external_urls: {
                spotify: ""
              },
              href: "",
              id: "",
              is_local: false,
              name: "",
              popularity: 0,
              preview_url: "",
              track_number: 0,
              type: "track",
              uri: ""
            }            
          ],
          limit: 0,
          next: "",
          offset: 0,
          previous: null,
          total: 0
        }
      },
      activePlaylist: {        
          collaborative: false,
          description: "",
          external_urls: {
            spotify: ""
          },
          href: "",
          id: "",
          images: [
            {
              height: null,
              url: "https://i.scdn.co/image/ab67706f00000003593b261ce02938e764009388",
              width: null
            }
          ],
          name: "d",
          owner: {
            display_name: "",
            external_urls: {
              spotify: ""
            },
            href: "",
            id: "",
            type: "",
            uri: ""
          },
          primary_color: null,
          public: true,
          snapshot_id: "",
          tracks: {
            href: "",
            total: 100
          },
          type: "playlist",
          uri: ""
        }
      };




   

      