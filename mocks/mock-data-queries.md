```
query {
  findPerformer(id: ) {
    id
    name
    disambiguation
    urls
    gender
    birthdate
    ethnicity
    country
    eye_color
    height_cm
    measurements
    fake_tits
    penis_length
    circumcised
    career_length
    tattoos
    piercings
    alias_list
    favorite
    tags {
      id
    }
    ignore_auto_tag
    image_path
    scene_count
    image_count
    gallery_count
    group_count
    performer_count
    o_counter
    scenes { id}
    stash_ids {
      endpoint
      stash_id
    }
    rating100
    details
    death_date
    hair_color
    weight
    created_at
    updated_at
    groups {id}id
  }
}
```

```
query {
  findScene(id: ) {
    id
    title
    code
    details
    director
    urls
    date
    rating100
    organized
    o_counter
    interactive
    interactive_speed
    captions {
      language_code
      caption_type
    }
    created_at
    updated_at
    last_played_at
    resume_time
    play_duration
    play_count
    play_history
    o_history
    files {
      id
      path
      basename
      parent_folder_id
      zip_file_id
      mod_time
      size
      fingerprints {
        type
        value
      }
      format
      width
      height
      duration
      video_codec
      audio_codec
      frame_rate
      bit_rate
      created_at
      updated_at
    }
    paths {
      screenshot
      preview
      stream
      webp
      vtt
      sprite
      funscript
      interactive_heatmap
      caption
    }
    scene_markers {
      id
    }
    galleries {
      id
    }
    studio {
      id
    }
    groups {
      group { id}
    }
    tags {
      id
    }
    performers { id}
    stash_ids {
      endpoint
      stash_id
    }
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
```